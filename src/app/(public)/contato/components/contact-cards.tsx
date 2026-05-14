import { Facebook } from "@/assets/svg/facebook";
import { Linkedin } from "@/assets/svg/linkedin";
import { Card, CardContent } from "@/components/ui/card";
import { Mail } from "lucide-react";
import Link from "next/link";

export function ContactCards() {
  return (
    <div className="hidden lg:grid grid-cols-3 gap-6 border-t border-border/20 pt-18 mt-28">
      <Card className="border-0 p-12 rounded-3xl">
        <CardContent className="p-0 space-y-2">
          <p>Envie um e-mail para nosso time</p>

          <div className="flex items-center gap-1">
            <Mail className="stroke-primary size-4" />
            <span className="text-sm underline">contact@alpa.com</span>
          </div>
        </CardContent>
      </Card>
      <Card className="border-0 p-12 rounded-3xl">
        <CardContent className="p-0">
          <span className="text-sm font-bold">Onde estamos</span>
          <p className="text-sm">
            Avenida Brigadeiro Faria Lima 1485, Conj. 91 - CEP 01.452.002
          </p>
        </CardContent>
      </Card>
      <Card className="border-0 p-12 rounded-3xl">
        <CardContent className="p-0 space-y-2">
          <p>Siga nossas redes sociais</p>
          <div className="flex items-center gap-2">
            <Link
              href="https://www.instagram.com/usealpa_"
              className="flex items-center justify-center size-10 rounded-full"
            >
              <Facebook className="size-9" />
            </Link>
            <Link
              href="https://linkedin.com"
              className="flex items-center justify-center size-8 bg-primary fill-transparent  rounded-full"
            >
              <Linkedin className="" />
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
