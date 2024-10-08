

// import React from 'react';
interface PageProps {
  params: { url: string| string[]| undefined };
}


function reconstructUrl({url}: {url: string[]}) {
  const decodedComponents= url.map((component) => decodeURIComponent(component));
  return decodedComponents.join("/");
}

const Page = ({params}: PageProps) => {
  const reconstructedUrl = reconstructUrl({url: params.url as string[]});
  console.log(params);
  return <p>Hello World</p>;
}

export default Page;