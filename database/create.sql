create database busscontroll;

create schema busscontroll;

CREATE TABLE tipo (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(15) NOT NULL UNIQUE
);

create table busscontroll.onibus {
  id_onibus serial primary key;
  previsaoSaida text not null;
  previsaoChegada text not null;
  trajeto text not null;
  id_motorista foreign key;
  id_cobrador foreign key;
  nome_motorista text not null;
  nome_cobrador text not null;
}

create table busscontroll.motorista {
  id_motorista serial primary key;
  nome text not null;
  cpf text not null;
  numeroCNH text not null;
}

create table busscontroll.cobrador {
  id_cobrador serial primary key;
  nome text not null;
  cpf text not null;
} 

create table busscontroll.gestor {
  id_gestor serial primary key;
  nome text not null;
  cpf text not null;
  email text not null;
  senha text not null;
  tipo text not null;
}

create table busscontroll.usuario {
  id_usuario serial primary key;
  nome text not null;
  cpf text not null;
  email text not null;
  senha text not null;
}






