interface TitleProps {
    titles: string;
}

export default function Title({ titles }: TitleProps) {
    return (
        <>
            <h1 className="art:font:bold art:font:lg art:font:capitalize"
                title={titles.toLocaleLowerCase()}
            >
                {
                    titles.length >= 18 ?
                        (
                            <>
                                {titles.slice(0, 18)}...
                            </>
                        )
                        :
                        (
                            <>
                                {titles.split(".")}.
                            </>
                        )
                }
            </h1>
        </>
    );
}