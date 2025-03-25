import { useState } from "react";
import { Input } from "@components/Input";
import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { Highlight } from "@components/Highlight";
import { Container, Content, Icon } from "./styles";
import { useNavigation } from "@react-navigation/native";

export function NewGroup() {
  const navigation = useNavigation();
  const [group, setGroup] = useState("");
  function handleNew() {
    navigation.navigate("players", { group });
  }
  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <Highlight
          title="Nova turma"
          subtitle="crie a turma para adicionar as pessoas"
        />
        <Input placeholder="Nome da turma" onChangeText={setGroup} />
        <Button title="Criar" style={{ marginTop: 20 }} onPress={handleNew} />
      </Content>
    </Container>
  );
}
