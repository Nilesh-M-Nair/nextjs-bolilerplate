import React, { useState, useEffect } from 'react';
import { onEntryChange } from '../contentstack-sdk';
import RenderComponents from '../components/render-components';
import { getCategories, getProductList } from '../helper';
import Skeleton from 'react-loading-skeleton';
import { Props, Context } from "../typescript/pages";
import { ProductList } from '../typescript/products';
import ProductGrid from '../components/product-container';

export default function Home() {
  const [entries, setEntries] = useState<ProductList>([] as ProductList);

  async function fetchData() {
    try {
      const entryRes = await getProductList();
      const res = await getCategories();
      console.log(entryRes)
      console.log(res)
      if (!entryRes) throw new Error('Status code 404');
      setEntries(entryRes);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    onEntryChange(() => fetchData());
  }, []);

  return entries ? (
    // <RenderComponents
    //   pageComponents={entries.}
    //   contentTypeUid='products'
    //   entryUid={entries.uid}
    //   locale={entries.locale}
    // />
    <div>
      {entries.map(products => {
        return <ProductGrid key={products?.uid} products={products?.products?.data}/>
        })
      }
    </div>
  ) : (
    <Skeleton count={3} height={300} />
  );
}

export async function getServerSideProps(context: Context) {
  try {
    const entryRes = await getCategories();
    return {
      props: {
        entryUrl: context.resolvedUrl,
        page: entryRes,
      },
    };
  } catch (error) {
    return { notFound: true };
  }
}
