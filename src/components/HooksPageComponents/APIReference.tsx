import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import type { HookAPI } from '@/types/HookAPI';
interface APIReferenceProps {
  api?: HookAPI;

}
const APIReference = ({ api }: APIReferenceProps) => {
  return (
    <div className="space-y-6">
      {/* API Reference */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">API Reference</h3>

        {/* Parameters Table */}
        <div className="mb-6">
          <h4 className="font-medium text-foreground mb-3">Parameters</h4>
          {api && (
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Required</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Default</TableHead>
                    <TableHead>Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {api.parameters.map((param, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-mono font-medium">{param.name}</TableCell>
                      <TableCell>
                        <Badge variant={param.required ? 'destructive' : 'secondary'} className="text-xs">
                          {param.required ? 'required' : 'optional'}
                        </Badge>
                      </TableCell>
                      <TableCell className="font-mono text-muted-foreground">{param.type}</TableCell>
                      <TableCell className="font-mono text-muted-foreground">{param.default || '-'}</TableCell>
                      <TableCell className="text-muted-foreground">{param.description}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </div>

        {/* Returns Table */}
        <div>
          <h4 className="font-medium text-foreground mb-3">Returns</h4>
          {api && (
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {api.returns.map((ret, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-mono font-medium">{ret.name}</TableCell>
                      <TableCell className="font-mono text-muted-foreground">{ret.type}</TableCell>
                      <TableCell className="text-muted-foreground">{ret.description}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default APIReference;
