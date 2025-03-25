import { useState } from "react";
import { FlatList } from "react-native";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { Highlight } from "@components/Highlight";
import { ListEmpty } from "@components/ListEmpty";
import { ButtonIcon } from "@components/ButtonIcon";
import { PlayerCard } from "@components/PlayerCard";
import { useRoute } from "@react-navigation/native";
import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";

type RouteParams = { group: string };
export function Players() {
  const route = useRoute();
  const [team, setTeam] = useState("Time A");
  const [pleayers, setPlayers] = useState([]);
  const { group } = route.params as RouteParams;
  return (
    <Container>
      <Header showBackButton />
      <Highlight title={group} subtitle="adicione a galera e separe os times" />
      <Form>
        <Input placeholder="Nome da pessoa" autoCorrect={false} />
        <ButtonIcon icon="add" />
      </Form>
      <HeaderList>
        <FlatList
          data={["Time A", "Time B"]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />
        <NumberOfPlayers>{pleayers.length}</NumberOfPlayers>
      </HeaderList>
      <FlatList
        data={pleayers}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <PlayerCard name={item} onRemove={() => {}} />
        )}
        ListEmptyComponent={() => (
          <ListEmpty message="Não há pessoas nesse time." />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          pleayers.length === 0 && { flex: 1 },
        ]}
      />
      <Button title="Remover Turma" type="SECONDARY" />
    </Container>
  );
}
