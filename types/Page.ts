import { PortableTextEditorElement } from "sanity"

export type Page = {
  _id: string;
  _createdAt: string;
  title: string;
  slug: string;
  content: PortableTextEditorElement[];
}