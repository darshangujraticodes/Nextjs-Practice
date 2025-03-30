import capitalizeWords from "@/app/Components/Capitalize";

type ParamsType = {
  params: Promise<{ blogId: String }>;
  searchParams: Promise<{ lang?: "en" | "fr" | "de" }>;
};

const BlogDetailPage = async ({ params, searchParams }: ParamsType) => {
  const { blogId } = await params;

  const { lang = "en" } = await searchParams;

  console.log(blogId.split("-").join(" "));
  let langData;

  if (lang === "en") langData = "en (English)";
  else if (lang === "fr") langData = "fr (French)";
  else if (lang === "de") langData = "de (German)";
  else langData = "en (English)";

  function getRandomInteger(max: number): number {
    let min = 1;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const randomInt = getRandomInteger(3);

  if (randomInt === 1) {
    throw new Error("Error in Loading Blog!");
  }

  return (
    <div className="mt-8">
      <h1 className="text-4xl text-center ">
        {capitalizeWords(blogId.split("-").join(" "))}
      </h1>
      <p className="text-center mt-3  text-xl ">
        Choose Language Format : {langData}
      </p>
    </div>
  );
};

export default BlogDetailPage;
