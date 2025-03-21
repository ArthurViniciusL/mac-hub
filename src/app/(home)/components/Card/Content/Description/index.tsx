interface DescriptionProps {
    description: string;
}


export default function Description({ description }: DescriptionProps) {
    return (
        <>
            <p
                title={description}
                className="art:font:base art:font:black-03"
            >
                {
                    description.length > 51 ?
                        (
                            <>
                                {description.slice(0, 51)}...
                            </>
                        )
                        :
                        (
                            <>
                                {description}
                            </>
                        )
                }
            </p>
        </>
    );
}