interface UserIdPageProps {
  params: {
    userId: string;
  }
}

const Page = ({ params }: UserIdPageProps) => {
  return (
    <div>
      Hello User {params.userId}
    </div>
  );
}

export default Page;