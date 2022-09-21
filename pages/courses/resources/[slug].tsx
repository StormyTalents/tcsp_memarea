import tw, { styled } from "twin.macro";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { useRouter } from "next/router";
import { ChevronLeftIcon, HomeIcon } from "@heroicons/react/solid";

import { Resource } from "../../../types";
import MainLayout from "../../../containers/layout/main-layout/MainLayout";
import { Button } from "../../../components";
import { VideoPlayer } from "../../../components/video-player";
import { AudioPlayer } from "../../../components/audio-player";
import { PdfViewer } from "../../../components/pdf-viewer";

type ResourceDetailPageProps = {
  resource: Resource;
};

const ResourceDetailPage = ({ resource }: ResourceDetailPageProps) => {
  const router = useRouter();
  const { slug } = router.query;

  if (!resource) {
    return <div>No Resource</div>;
  }

  return (
    <MainLayout
      breadCrumbs={[
        {
          name: "dashboard",
          label: "Dashboard",
          icon: <HomeIcon tw="w-4 h-4" />,
          active: false,
        },
        {
          name: "courses",
          label: "Courses",
          active: false,
        },
        {
          name: "resources",
          label: "Resources",
          active: false,
        },
        {
          name: slug as string,
          label: resource.title,
          active: true,
        },
      ]}
    >
      <div tw="flex items-baseline">
        <Button
          color="black"
          icon={<ChevronLeftIcon tw="w-5 h-5" />}
          variant="primary"
          iconOnly={true}
          onClick={() => router.back()}
        />
        <TitleWrapper>
          <h1>{resource?.title}</h1>
          <p>{resource?.course}</p>
        </TitleWrapper>
      </div>
      <div tw="mt-4">
        {resource.type === "pdf" ? (
          <PdfViewer pdf={resource} />
        ) : resource.type === "mov" ? (
          <VideoPlayer video={resource?.file} />
        ) : resource.type === "audio" ? (
          <AudioPlayer audio={resource} />
        ) : (
          <PdfViewer pdf={resource} />
        )}
      </div>
    </MainLayout>
  );
};

type Params = ParsedUrlQuery & {
  slug: string;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const arr: string[] = ["1", "2", "3"];
  const paths = arr.map((slug) => {
    return {
      params: { slug },
    };
  });

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as Params;

  const resources: Resource[] = [
    {
      id: "1",
      title: "The Credit Success Journal",
      course: "The Credit Solution Program",
      file: "http://www.africau.edu/images/default/sample.pdf",
      type: "pdf",
    },
    {
      id: "2",
      title: "Divorce & Credit",
      course: "The Credit Solution Program",
      file: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      type: "mov",
    },
    {
      id: "3",
      title: "Dealing with Tax Liens",
      course: "The Credit Solution Program",
      file: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      type: "audio",
    },
  ];

  const resource = resources.find((_resourceItem) => _resourceItem.id == slug);

  return {
    props: {
      resource,
    },
  };
};

const TitleWrapper = styled.div`
  ${tw`ml-2`}
  h1 {
    ${tw`text-4xl font-bold leading-[150%] text-gray-800`}
  }

  p {
    ${tw`font-bold text-base leading-[150%] text-gray-400`}
  }
`;

export default ResourceDetailPage;
