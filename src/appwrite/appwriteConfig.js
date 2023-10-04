import config from "../config/config";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
    client = new Client();
    Databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({ title, slug, description, featuredImage, status, UserId }) {
        try {
            return await this.databases.createDocument(
                config.appwriteDatabaseId,
                conig.appwriteCollectionId,
                slug,
                {
                    title,
                    description,
                    featuredImage,
                    status, UserId
                }
            )
        } catch (error) {
            throw error
        }
    }
}

const service = new Service();
export default Service;