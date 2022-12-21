interface IPosts {
	totalPages: number;
	totalItems: number;
	page: number;
	hasNextPage: boolean;
	data: IPostsData[];
}

interface IPostsData {
	id: string;
	content: string;
	member: any;
	attachments: IGroupAttachments[];
}

export interface IAttachments {
	id: string;
	fileName: string;
}

interface IGroupAttachments extends IAttachments {
	groupId: string;
	memberId: string;
}

export default IPosts;