'use client';

import { memo } from 'react';
import { NFModal } from './modals/NFModal';
import { CancelPurshaseModal } from './modals/CancelPurshaseModal';
import { useProductCardController } from '../controller';
import { ProductCard } from '~shared/components/ProductCard';
import { PurshaseModal } from './modals/PurshaseModal';
import { ProductCard as ProductCardType } from '~types/ProductCard';
import { useNewOrderController } from '../../newOrder/controller';
import { productcardsTV } from '../ProductCardsTV';

export interface ProductCardContentProps {
  productCard?: ProductCardType[];
}

function ProductCardContent({ productCard }: ProductCardContentProps) {
  const {
    isEditing,
    indexModalOpen,
    indexNFModalOpen,
    indexCancelModalOpen,
    productCardActions,
    closeModal,
    closeNFModal,
    toggleIsEditing,
    closeCancelModal,
    openCancelModal,
    handleLike
  } = useProductCardController();
  const { sendNewOrder, lastTwoTen, isLoading } = useNewOrderController();

  const data = productCard ?? lastTwoTen;

  const skelletons = Array.from({ length: 4 }).map((_, i) => (
    <ProductCard.root key={i}>
      <ProductCard.skelleton />
    </ProductCard.root>
  ));

  return (
    <div className={productcardsTV()}>
      {!data || isLoading
        ? skelletons
        : data?.map((productCardContent) => (
            <ProductCard.root key={productCardContent.orderId}>
              <PurshaseModal
                sendNewOrder={sendNewOrder}
                product={productCardContent}
                isEditing={isEditing}
                isModalOpen={indexModalOpen === productCardContent.orderId}
                productName={productCardContent.product.productName}
                quantity={productCardContent.product.quantity}
                unitPrice={productCardContent.product.unitPrice}
                closeModal={closeModal}
                toggleIsEditing={toggleIsEditing}
              />
              <NFModal
                closeNFModal={closeNFModal}
                isNFModalOpen={indexNFModalOpen === productCardContent.orderId}
              />
              <CancelPurshaseModal
                productName={productCardContent.product.productName}
                closeCancelModal={closeCancelModal}
                isCancelPurshaseModalOpen={indexCancelModalOpen === productCardContent.orderId}
              />
              <ProductCard.identify color={productCardContent.orderColorIdentity} />
              <ProductCard.status
                handleCancel={() => openCancelModal(productCardContent.orderId)}
                state={productCardContent.orderStatus}
              />
              <ProductCard.header
                date={productCardContent.orderDate}
                productBrand={productCardContent.product.productBrand}
                productName={productCardContent.product.productName}
              />
              <ProductCard.likeAction
                isLiked={productCardContent.isLiked}
                handleLike={handleLike}
              />
              <ProductCard.contentInfo
                isUnderAnalysis={productCardContent.orderStatus === 'underAnalysis'}
                totalPrice={productCardContent.product.totalPrice}
                quantity={productCardContent.product.quantity}
                unitPrice={productCardContent.product.unitPrice}
              />
              <ProductCard.similarCompanies
                similarCompanies={productCardContent.partnerCompaniesInthisOrder}
              />
              <ProductCard.actions
                status={productCardContent.orderStatus}
                actions={() => productCardActions(productCardContent.orderId)}
              />
            </ProductCard.root>
          ))}
    </div>
  );
}

export default memo(ProductCardContent);
