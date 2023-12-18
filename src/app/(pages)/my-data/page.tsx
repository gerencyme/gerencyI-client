import { MyData } from '../../features/myData';

export default function MyDataPage() {
  return (
    <MyData.root>
      <MyData.SupplierInformation />
      <MyData.PersonalInformation />
    </MyData.root>
  );
}
