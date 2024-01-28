import { NewOrder } from '../../features/newOrder';
import { newOrderPageTV } from './NewOrderPageTV';

export default function NewOrderPage() {
  return (
    <div className={newOrderPageTV()}>
      <NewOrder.root>
        <NewOrder.locationGuide />

        <NewOrder.HalfContainer>
          <NewOrder.draftMode />
          <NewOrder.form />
          <NewOrder.ColorIdentity />
        </NewOrder.HalfContainer>

        <NewOrder.HalfContainer>
          <NewOrder.information />
        </NewOrder.HalfContainer>
      </NewOrder.root>

      <NewOrder.lastProducts />
    </div>
  );
}
