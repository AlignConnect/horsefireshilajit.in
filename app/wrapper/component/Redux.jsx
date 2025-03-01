import { useGetShopifyDataQuery } from '@/lib/service/product.service'
import { getStoreProductInfo } from '@/lib/slice/product.slice';
import React from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const Redux = ({ children }) => {

    const { data } = useGetShopifyDataQuery({ id: "9852036514107" });


    const dispatch = useDispatch();



    useEffect(() => {

        dispatch(getStoreProductInfo({
            productsdata: data,
            allVariants: data?.variants?.slice(),
            selectProducts: data?.variants[0]
        }))

    }, [data])




    return (
        <div>
            {children}
        </div>
    )
}

export default Redux
