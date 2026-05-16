import Header from "@/components/Header";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <SafeAreaView className="flex-1" edges={["top"]}>
      <Header title='forever' showMenu showCart showLogo/>
    </SafeAreaView>
  );
}
