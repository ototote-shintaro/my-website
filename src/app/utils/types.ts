export type Article = {
	id: string;
	title: string;
	content: string;
	createdAt: string;
	imageUrl: string;
};

export type Concert = {
	id: number;
	title: string;
	date: string;
	open: string;
	start: string;
	venue: string;
	price: string;
	memo: string;
};
