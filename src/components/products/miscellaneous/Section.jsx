import React from "react";
import Separator from "../../miscellaneous/Separator";

const DisplaySection = () => {
  return (
    <div className="section products">
      <div className="container">
        <div className="thmtitle products__title">
          <h4>WHY WORK WITH US?</h4>
          <Separator />
          <h3>Industry related experienced content creators on demand</h3>
          <p>
            Creation of content is about connecting and adding value to your
            users. So, we focus on knowing what your users want (SEO, User
            Research), understanding their behavior (analytics) and most
            importantly delivering the right content, at the right time, at the
            right place.
          </p>
        </div>
        <div className="products__flex">
          <div className="products__box">
            <span class="material-symbols-outlined">draw</span>
            <h3>Digital Content Platform</h3>
            <p>
              Manage all your content on our all-in-one-platform. Place your
              orders, track progress, and manage the project with the support of
              a stellar customer service team.
            </p>
          </div>
          <div className="products__box">
          <span class="material-symbols-outlined">manage_accounts</span>
            <h3>Managed Accounts</h3>
            <p>
              Have large needs or need someone to help? We have you covered.
              Just write to us, and our Account Managers will get back to you.
            </p>
          </div>
          <div className="products__box">
            <span class="material-symbols-outlined">account_tree</span>
            <h3>SEO Intelligence</h3>
            <p>
              Writing Impact can help you choose the right trends, keywords,
              topics, and customized guidelines to meet your content goals.
            </p>
          </div>
          <div className="products__box">
            <span class="material-symbols-outlined">edit_note</span>
            <h3>AI Copywriter</h3>
            <p>
              Need something quick, good, and publish ready? Our AI copywriter
              is at your disposal.
            </p>
          </div>
          <div className="products__box">
            <span class="material-symbols-outlined">web</span>
            <h3>Publishing</h3>
            <p>
              Not only can we help create content, but also help you publish.
              (Coming soon - WordPress Integration)
            </p>
          </div>
          <div className="products__box">
            <span class="material-symbols-outlined">monitoring</span>
            <h3>Analytics</h3>
            <p>
              Our ability to share data, discuss the outcomes, and improvise for
              better results makes us an bankable partner.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplaySection;
