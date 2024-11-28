import { useEffect, useState } from "react";
import { Cards, LastActivity } from "../components";
import { useDashboardStore } from "../store/useDashboardStore";
import { Loading } from "../../../shared/components";

export const DashboardPage = () => {
  const loadData = useDashboardStore((state) => state.loadData);
  const dashboardData = useDashboardStore((state) => state.dashboardData);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      loadData();
      setIsLoading(false);
    }
  }, [isLoading]);

  if (isLoading) return <Loading />;

  const {
    usersCount,
    postsCount,
    tagsCount,
    commentsCount,
    categories,
    tags,
    posts,
  } = dashboardData;

  return (
    <>      
      <div className="h-auto">
        {/* Cards */}
        <Cards {...{ postsCount, tagsCount, commentsCount, usersCount }} />
      </div>
      <div className="row-start-2 col-start-2 p-4">
        {/* Last activity */}
        <LastActivity posts={posts} tags={tags} categories={categories} />
      </div>
    </>
  );
};
