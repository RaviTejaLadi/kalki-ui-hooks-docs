import { Link } from 'react-router-dom';

const BreadcrumbNavigation = ({ name }: { name: string }) => {
  return (
    <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
      <Link to="/" className="hover:text-foreground transition-colors">
        Home
      </Link>
      <span>/</span>
      <Link to="/hooks" className="hover:text-foreground transition-colors">
        Hooks
      </Link>
      <span>/</span>
      <span className="text-foreground">{name}</span>
    </nav>
  );
};

export default BreadcrumbNavigation;
