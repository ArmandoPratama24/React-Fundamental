function Article () {
    const name = "Hayakawa"
    const titles = ["tutorial react js", "tutorial vite", "Tutorial NextJs"]


    return (
        <>
            <div>{name}</div>
            <div>{titles.map(title => {
                return (
                    <>
                    <div>{title}</div>
                    </>
                );
            })}
        </div>
    </>
  );
}

export default Article