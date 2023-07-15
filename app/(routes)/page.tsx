import React from 'react'

import getBillboard from '@/actions/get-billboard'
import getProducts from '@/actions/get-products'
import ProductList from '@/components/product-list'
import Billboard from '@/components/ui/billboard'
import Container from '@/components/ui/container'

const HomePage = async () => {
    const products = await getProducts({ isFeatured: true })
    const billboard = await getBillboard("d6e31a2c-1921-44e3-9429-cff9bbfb2972")
    return (
        <Container>
            <div className='space-y-10 pb-10'>
                <Billboard data={billboard} />
            </div>
            <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                <ProductList title='Featured' items={products} />
            </div>
        </Container>
    )
}

export default HomePage