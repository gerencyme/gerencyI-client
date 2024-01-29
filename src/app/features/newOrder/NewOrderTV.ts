import { tv } from 'tailwind-variants';

export const newOrderRootTv = tv({
  base: 'flex flex-col-reverse lg:flex-row gap-8 items-center justify-evenly lg:overflow-y-hidden h-[660px]'
});

export const halfContainerTv = tv({
  base: 'flex flex-col w-fit h-fit gap-2 md:gap-4 lg:translate-y-24'
});

export const colorIdentityTv = tv({
  base: 'gap-2 max-[480px]:translate-y-12 md:translate-y-6 lg:pb-4',
  variants: {
    visibleState: {
      visible: 'flex flex-col',
      hidden: 'hidden'
    }
  }
});

export const colorIdentityTooltipTv = tv({
  base: 'flex items-center gap-2'
});

export const renderTextElementTv = tv({
  base: 'text-xs md:text-sm'
});

export const newOrderActionsWrapperTv = tv({
  base: 'flex gap-2 md:gap-4 items-center justify-evenly'
});

export const newOrderClearActionTv = tv({
  base: 'duration-300',
  variants: {
    draftMode: {
      hasDraft: 'translate-x-0 w-full',
      haventDraft: '-translate-x-96 w-0'
    }
  },
  defaultVariants: {
    draftMode: 'haventDraft'
  }
});

export const newOrderSubmitActionTv = tv({
  base: 'duration-300',
  variants: {
    draftMode: {
      hasDraft: 'translate-x-0',
      haventDraft: '-translate-x-5 sm:-translate-x-6'
    }
  },
  defaultVariants: {
    draftMode: 'haventDraft'
  }
});

export const newOrderDraftTv = tv({
  base: 'duration-500 text-[10px] md:text-[12px] dark:text-lime text-green-500 max-[480px]:translate-y-12 md:translate-y-8',
  variants: {
    draftMode: {
      hasDraft: 'translate-x-0',
      haventDraft: '-translate-x-72'
    }
  },
  defaultVariants: {
    draftMode: 'haventDraft'
  }
});

export const newOrderInformationTv = tv({
  base: 'hidden lg:flex flex-col gap-2 md:gap-4 w-full max-w-xl'
});

export const newOrderBestSellersWrapperTv = tv({
  base: 'absolute top-12 lg:-top-48 pr-2 w-full lg:w-screen left-1 overflow-x-auto'
});

export const newOrderBestSellersTitleTv = tv({
  base: 'text-md md:text-lg'
});

export const newOrderBestSellersTextTv = tv({
  base: 'hidden min-[500px]:flex text-sm pt-2'
});

export const newOrderFormWrapperTv = tv({
  base: 'flex flex-col gap-4 md:gap-6 w-full max-[480px]:translate-y-12 md:translate-y-6'
});

export const newOrderFormContentTv = tv({
  base: 'flex flex-wrap md:flex-nowrap gap-4 md:gap-6 justify-center'
});

export const newOrderFormInputsTv = tv({
  base: 'flex flex-col gap-4 md:gap-6'
});

export const newOrderLastProductsTv = tv({
  base: 'h-full max-h-[520px] relative'
});
