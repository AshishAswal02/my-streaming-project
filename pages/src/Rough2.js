import { con1 } from '../_app'

const Rough2 = () => {

    return (
        <div>
            {
                <con1.Consumer>
                    {
                        (x) => {
                            return <>
                                <h1> My name is {x} </h1>
                            </>
                        }
                    }
                </con1.Consumer>
            }
        </div>
    )
}

export default Rough2
