import { Tag } from 'lucide-react';
import { Badge } from '../ui/badge';

interface HeaderSectionProps {
  name: string;
  description: string;
  category: string;
  icon: string;
  tags?: string[];
}
const HeaderSection = ({ icon, name, category, description, tags }: HeaderSectionProps) => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'React Built-in':
        return 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-400';
      case 'State Management':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
      case 'Performance':
        return 'bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-400';
      case 'DOM Events':
        return 'bg-sky-100 text-sky-800 dark:bg-sky-900/30 dark:text-sky-400';
      case 'Responsive':
        return 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-400';
      case 'Network':
        return 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-400';
      case 'Timers':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
      case 'Animation':
        return 'bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-400';
      case 'Forms':
        return 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-400';
      case 'Utility':
        return 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300';
      case 'Browser APIs':
        return 'bg-sky-100 text-sky-800 dark:bg-sky-900/30 dark:text-sky-400';
      case 'Storage':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
      case 'Development':
        return 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300';
      default:
        return 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300';
    }
  };
  return (
    <div className="mb-12">
      <div className="flex items-start gap-4 mb-6">
        <div className="flex-shrink-0">
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center">
            <span className="text-3xl">{icon}</span>
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-3">
            <h1 className="text-4xl font-bold text-foreground">{name}</h1>
            <Badge className={getCategoryColor(category)}>{category}</Badge>
          </div>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl">{description}</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {tags &&
          tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="flex items-center gap-1">
              <Tag className="w-3 h-3" />
              {tag}
            </Badge>
          ))}
      </div>
    </div>
  );
};

export default HeaderSection;
