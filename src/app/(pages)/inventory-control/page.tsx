import { Dashboard } from '../../features/dashboard';
import { Reflector } from '../../shared/components/Reflector';

export default function InventoryControlPage() {
  return (
    <Dashboard.root>
      <div className="relative">
        <Reflector>
          <Dashboard.header />
        </Reflector>
        <Dashboard.header />
      </div>
      <Dashboard.graphics />
      <Dashboard.table />
    </Dashboard.root>
  );
}
