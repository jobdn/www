type FileExtension = "mdx" | "tsx";
type FileName = string;

function only(extension: FileExtension) {
  return function withExtension(fileName: FileName): boolean {
    return fileName.includes(`.${extension}`);
  };
}

export const onlyMdx = only("mdx");
