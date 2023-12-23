'use client';

import { NewOrder } from '~features/newOrder';

export default function MyAccountPage() {
  return (
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
  );
}
