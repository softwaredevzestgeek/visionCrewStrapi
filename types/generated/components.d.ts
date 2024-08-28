import type { Schema, Attribute } from '@strapi/strapi';

export interface CollaborationsBrands extends Schema.Component {
  collectionName: 'components_collaborations_brands';
  info: {
    displayName: 'Brands';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    Images: Attribute.Media<'images', true>;
  };
}

export interface SectionsTab extends Schema.Component {
  collectionName: 'components_sections_tabs';
  info: {
    displayName: 'Tab';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    content: Attribute.Component<'sections.tab-content', true> &
      Attribute.Required;
    slugs: Attribute.String;
  };
}

export interface SectionsTabContent extends Schema.Component {
  collectionName: 'components_sections_tab_contents';
  info: {
    displayName: 'Tab Content';
    description: '';
  };
  attributes: {
    project_title: Attribute.String;
    time_duration: Attribute.String;
    description: Attribute.Blocks;
    client_details: Attribute.String;
    client_reviews: Attribute.Blocks;
    photos: Attribute.Media<'images', true>;
    link: Attribute.Text;
    tech_stacks: Attribute.Relation<
      'sections.tab-content',
      'oneToMany',
      'api::tech-stack.tech-stack'
    >;
    header_description: Attribute.Text;
    reviews: Attribute.Boolean;
    projectSlug: Attribute.String;
    categorizedSlug: Attribute.String;
    technicalChallenges: Attribute.Component<'sections.challanges', true>;
  };
}

export interface SectionsChallanges extends Schema.Component {
  collectionName: 'components_sections_challanges';
  info: {
    displayName: 'Challanges';
    description: '';
  };
  attributes: {
    challange: Attribute.Blocks;
    challangeIcon: Attribute.Media<'images'>;
    IconBool: Attribute.Boolean;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'collaborations.brands': CollaborationsBrands;
      'sections.tab': SectionsTab;
      'sections.tab-content': SectionsTabContent;
      'sections.challanges': SectionsChallanges;
    }
  }
}
