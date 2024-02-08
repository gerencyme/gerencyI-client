'use client';

import { FavoriteCard } from '~shared/components/FavoriteCard';
import { PurshaseModal } from '~features/Productcards/views/modals/PurshaseModal';
import { useProductCardController } from '~features/Productcards/controller';
import { useFavoritesController } from '~features/favorites/controller';

export function FavoritesCards() {
  const { favorites, submitNewOrder, updateLike } = useFavoritesController();
  const { isEditing, indexModalOpen, openRepeatPurchaseModal, closeModal, toggleIsEditing } =
    useProductCardController();

  return (
    <div className="flex items-center gap-8 flex-wrap justify-center">
      {favorites?.map((item) => (
        <FavoriteCard.root key={item.orderId}>
          <PurshaseModal
            sendNewOrder={() => submitNewOrder(item)}
            product={item}
            isEditing={isEditing}
            isModalOpen={indexModalOpen === item.orderId}
            productName={item.productName}
            closeModal={closeModal}
            toggleIsEditing={toggleIsEditing}
          />
          <FavoriteCard.likeAction
            isLiked={true}
            handleLike={() => updateLike(item.orderId, false)}
          />
          <FavoriteCard.header productBrand={item.productBrand} productName={item.productName} />
          <FavoriteCard.purchasesInfo
            canceledPurchases={item.countStatusCnacel}
            donePurchases={item.countStatusDone}
            underAnalysisPurchases={item.countStatusUnderAnalise}
          />
          <FavoriteCard.action onClick={() => openRepeatPurchaseModal(item.orderId)} />
        </FavoriteCard.root>
      ))}
    </div>
  );
}
