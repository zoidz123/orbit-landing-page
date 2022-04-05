import React from "react";

const Main = () => {
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)

    React.useEffect(() => {
        const handleResize = () => {
            console.log(windowWidth)
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [windowWidth])

    const isTrue = windowWidth > 800 ? true : false

    return (
        < section >
            {
                isTrue
                    ?
                    <div className="big--wrapper">
                        <div className="title">Orbit Protocol is a next generation on-chain lending protocol that enables future income streams as collateral. We expect the number of on-chain businesses that generate significant revenue to drastically increase and drive demand for an alternative source of capital. Liquidation-free loans and improved capital efficiency for on-chain entities.</div>
                        <div className="socials">
                            <div className="title--tag">Coming soon. To learn more or to discuss ideas, please see our documentation and/or message us.</div>
                        </div>
                    </div>
                    :
                    <div className="small--wrapper">
                        <div className="title">Orbit Protocol is a next generation on-chain lending protocol that enables future income streams as collateral. We expect the number of on-chain businesses that generate significant revenue to drastically increase and drive demand for an alternative source of capital. Liquidation-free loans and improved capital efficiency for on-chain entities.</div>
                        <div className="socials">
                            <div className="title--tag">Coming soon. To learn more or to discuss ideas, please see our documentation and/or message us.</div>
                        </div>
                    </div>
            }
            <div className="tag--box">
                <a className="tag" href="https://twitter.com/juicefinance">Twitter</a>
                <a className="tag" href="https://kliang9715.gitbook.io/product-docs/getting-started/introduction">Documentation</a>
            </div>
        </section >
    )
}

export default Main;
