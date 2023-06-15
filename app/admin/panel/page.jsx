import React from "react";
import { authOptions } from "pages/api/auth/[...nextauth]";
import { unstable_getServerSession } from "next-auth/next";
const page = async () => {
  // console.log({ session });

  return (
    <div>
      <p>Admin Protected Page - PANEL</p>
    </div>
  );
};

export default page;
