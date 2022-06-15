create schema busscontroll;

create table busscontroll.onibus (
  id_onibus serial primary key,
  previsaoSaida text not null,
  previsaoChegada text not null,
  trajeto text not null,
  Constraint fk_motorista foreign key (id_motorista) references motorista (id_motorista),
  Constraint fk_cobrador foreign key (id_cobrador) references cobrador (id_cobrador)
);
  
create table busscontroll.motorista (
  id_motorista serial primary key,
  nome text not null,
  cpf text not null,
  dataNascimento date not null,
  numeroCNH text not null
);

create table busscontroll.cobrador (
  id_cobrador serial primary key,
  nome text not null,
  cpf text not null,
  dataNascimento date not null
);

create table busscontroll.gestor (
  id_gestor serial primary key,
  nome text not null,
  cpf text not null,
  email text not null,
  senha text not null,

);
  
create table busscontroll.usuario (
  id_usuario serial primary key,
  nome text not null,
  cpf text not null,
  email text not null,
  senha text not null
);
  







