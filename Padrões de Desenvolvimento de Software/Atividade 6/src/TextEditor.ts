import { Publisher } from "./Publisher";

export class Editor extends Publisher {}

export class TextEditor extends Editor {
  private lines: string[] = [];

  insertLine(lineNumber: number, text: string): void {
    this.lines.splice(lineNumber, 0, text);
    this.notificar("InsertLine", { lineNumber, text });
  }

  removeLine(lineNumber: number): void {
    this.lines.splice(lineNumber, 1);
    this.notificar("RemoveLine", { lineNumber });
  }

  open(): void {
    this.notificar("Open");
  }

  save(): void {
    this.notificar("Save", { content: this.lines.join("\n") });
  }

  getLines(): string[] {
    return this.lines;
  }
}
