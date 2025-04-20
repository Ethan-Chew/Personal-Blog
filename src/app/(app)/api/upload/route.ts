import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from 'uuid';

const r2 = new S3Client({
    region: "auto",
    endpoint: process.env.R2_ENDPOINT ?? "",
    credentials: {
        accessKeyId: process.env.R2_ACCESS_KEY_ID ?? "",
        secretAccessKey: process.env.R2_SECRET_ACCESS_KEY ?? ""
    }
});

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData();
        const file = formData.get("file") as File;

        if (!file.type.startsWith("image/")) {
            throw new Error("File should be an image");
        }

        const key = uuidv4();
        const upload = new PutObjectCommand({
            Bucket: "blog",
            Key: key,
            ContentLength: file.size,
            ContentType: file.type
        });

        await r2.send(upload);
        const imageUrl = `${process.env.R2_ENDPOINT}/blog/${key}`;

        return NextResponse.json({ url: imageUrl }, { status: 200 });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
    }
}