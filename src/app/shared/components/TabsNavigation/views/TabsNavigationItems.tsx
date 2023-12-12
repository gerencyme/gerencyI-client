import Link from 'next/link';
import { Text } from '../../Text';
import { TabsNavigationItems as TabsNavigationItem } from '~types/TabsNavigationItems';
import { CircularDivisor } from '../../CircularDivisor';
import { useTabsNavigationController } from '~/src/app/features/TabsNavigation/controller';
import {
  tabsNavigationItemsTv,
  tabsNavigationLabelTv,
  tabsNavigationLinkTv
} from '../TabsNavigationTV';
import { VariantProps } from 'tailwind-variants';

export type TabsNavigationItemsProps = {
  links: TabsNavigationItem[];
  isOpen: boolean;
} & VariantProps<typeof tabsNavigationItemsTv>;

export function TabsNavigationItems({
  links = [],
  isOpen = false,
  state
}: TabsNavigationItemsProps) {
  const useTabsNavigationControllerProps: TabsNavigationItemsProps = {
    links,
    isOpen
  };
  const { linksToRender, pathName } = useTabsNavigationController(useTabsNavigationControllerProps);

  const listState: typeof state = isOpen ? 'isOpen' : 'isClosed';

  return (
    <>
      {linksToRender.map((link, i) => {
        const actualActive = pathName === link.href;
        const isLastItem = i === linksToRender.length - 1;
        const actualActiveState = actualActive ? 'isActive' : 'notActive';

        return (
          <li key={i} className={tabsNavigationItemsTv({ state: listState })}>
            <Link href={link.href} className={tabsNavigationLinkTv({ state: actualActiveState })}>
              <Text
                text={link.label}
                weight="bold"
                as="span"
                className={tabsNavigationLabelTv({ state: actualActiveState })}
              />
            </Link>
            {!isLastItem && <CircularDivisor />}
          </li>
        );
      })}
    </>
  );
}
