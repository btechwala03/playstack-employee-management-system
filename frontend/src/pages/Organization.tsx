import React, { useState } from 'react';
import { useOrganizationTree } from '../hooks/useOrganization';
import { OrgNode as OrgNodeType } from '../services/organization.service';
import { useTheme } from '../providers/ThemeProvider';
import { TopBar, Av, DeptBadge } from '../components/FigmaShared';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function OrgNode({
  node, depth, navigate
}: {
  node: OrgNodeType; depth: number; navigate: (path: string) => void;
}) {
  const [expanded, setExpanded] = useState(depth < 2);
  const children = node.reportees || [];
  const hasChildren = children.length > 0;
  const name = `${node.firstName} ${node.lastName}`;

  return (
    <div className={depth > 0 ? "ml-6 border-l border-border pl-4 mt-1" : ""}>
      <div className="flex items-center gap-1 py-1">
        <button
          onClick={() => setExpanded(!expanded)}
          className={`w-5 h-5 rounded flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent transition-colors flex-shrink-0 ${!hasChildren ? "opacity-0 pointer-events-none" : ""}`}
        >
          {expanded ? <ChevronDown size={12} /> : <ChevronRight size={12} />}
        </button>
        <div
          role="button"
          tabIndex={0}
          className={`flex items-center gap-3 flex-1 p-2.5 rounded-lg hover:bg-accent/40 transition-colors cursor-pointer group ${depth === 0 ? "bg-primary/8 border border-primary/15" : ""}`}
          onClick={() => navigate(`/employees/${node._id}`)}
          onKeyDown={(e) => e.key === "Enter" && navigate(`/employees/${node._id}`)}
        >
          <Av name={name} size={depth === 0 ? "md" : "sm"} />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-foreground truncate group-hover:text-primary transition-colors">{name}</p>
            <p className="text-xs text-muted-foreground truncate">{node.designation}</p>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <DeptBadge dept={node.department} />
            {hasChildren && (
              <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                {children.length} report{children.length !== 1 ? "s" : ""}
              </span>
            )}
          </div>
        </div>
      </div>
      {expanded && hasChildren && (
        <div>
          {children.map((child) => (
            <OrgNode key={child._id} node={child} depth={depth + 1} navigate={navigate} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Organization() {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const { data: tree, isLoading, isError } = useOrganizationTree();
  
  const isDark = theme === 'dark';

  return (
    <div className="flex flex-col h-full overflow-hidden bg-background">
      <TopBar 
        title="Organization Hierarchy" 
        subtitle="Reporting structure across the company" 
        isDark={isDark} 
        toggleDark={toggleTheme} 
      />
      <div className="flex-1 overflow-y-auto p-6">
        <div className="max-w-3xl mx-auto">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center h-64 text-center">
               <p className="text-sm font-medium text-muted-foreground animate-pulse">Loading organization tree...</p>
            </div>
          ) : isError || !tree || tree.length === 0 ? (
            <div className="bg-card border border-border rounded-xl p-5 text-center">
               <p className="text-sm text-muted-foreground">No organization data found.</p>
            </div>
          ) : (
            <div className="bg-card border border-border rounded-xl p-5">
              <div className="flex items-center justify-between mb-4">
                <p className="text-xs text-muted-foreground">Click any employee to view their profile. Expand nodes with the arrow icons.</p>
              </div>
              {tree.map((node) => (
                <OrgNode key={node._id} node={node} depth={0} navigate={navigate} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
