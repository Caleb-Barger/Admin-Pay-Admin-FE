import React from 'react'
import { Card } from 'antd'
import OpenModal from './OpenModal'

const Post = props => {

    const { Meta } = Card
    
    return (
        <>
        <Card
            style={{ width: 300, margin: 20 }}
            cover={
                <img
                    alt="test"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
            }
            actions={[
                <OpenModal desc={props.desc} />
            ]}
        >
            <Meta 
                title="Some Admin Stuff"
                description="this is some content that will be displayed here regaurding the content of this card."
            />
        </Card>
        </>
    )
}

export default Post