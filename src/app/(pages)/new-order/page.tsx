import { Order } from '~features/Order';

export default function NewOrderPage() {
  return (
    <Order.root>
      <Order.newOrder />
      <Order.lastProducts />
    </Order.root>
  );
}
