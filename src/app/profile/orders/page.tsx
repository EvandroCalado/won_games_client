import { OrdersList } from '@/components';
import { mock } from '@/components/OrdersList/mock';
import { Profile } from '@/templates';

const OrdersPage = () => {
  return (
    <Profile>
      <OrdersList items={mock} />
    </Profile>
  );
};

export default OrdersPage;
