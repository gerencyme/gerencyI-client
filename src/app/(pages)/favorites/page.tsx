import { Favorites } from '~/src/app/features/favorites';
import { Text } from '~/src/app/shared/components/Text';

export default function FavoritesPage() {
  return (
    <>
      <Text
        text="Envie seus produtos mais vendidos para análise de maneira rápida"
        size="md"
        weight="black"
      />
      <Favorites.root>
        <Favorites.cards />
      </Favorites.root>
    </>
  );
}
