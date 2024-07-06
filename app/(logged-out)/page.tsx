import { Button } from "@/components/ui/button";
import { PersonStandingIcon } from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
    return (
        <>
            <h1 className="flex gap-2 items-center">
                <PersonStandingIcon size={50} className="text-orange-500" /> DukungKami
            </h1>
            <p>
                Pendataan Anak Usia Dini 2024, Mempersiapkan Generasi Emas 2045
            </p>
            <div className="flex gap-2 items-center">
            <Button asChild>
                <Link href="/login">Masuk</Link>                
            </Button>
            <small>atau</small>
            <Button asChild variant="outline">
                <Link href="/sign-up">Mendaftar</Link> 
            </Button>
            </div>
           
        </>
    );
}