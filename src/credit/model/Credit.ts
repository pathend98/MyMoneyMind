interface Credit {
  id: string;
  name: string;
  value: number;
  category: string;
  date: Date;
  dateOfPayment: Date | null;
}

export { Credit };
