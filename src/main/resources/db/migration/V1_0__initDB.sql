create table biochemical_blood_test
(
    id                  bigint           not null auto_increment,
    is_deleted          bit default b'0',
    created_on          datetime(6),
    result              varchar(255),
    cholesterol         double precision not null,
    glucose             double precision not null,
    protein             double precision not null,
    attending_doctor_id bigint,
    user_id             bigint,
    primary key (id)
) engine = InnoDB;
create table general_blood_test
(
    id                  bigint           not null auto_increment,
    is_deleted          bit default b'0',
    created_on          datetime(6),
    result              varchar(255),
    erythrocytes        double precision not null,
    hemoglobin_value    double precision not null,
    leukocytes          double precision not null,
    attending_doctor_id bigint,
    user_id             bigint,
    primary key (id)
) engine = InnoDB;
create table log_info
(
    id         bigint not null auto_increment,
    is_deleted bit default b'0',
    timestamp  datetime(6),
    user_id    bigint,
    primary key (id)
) engine = InnoDB;
create table report_history
(
    id         bigint not null auto_increment,
    is_deleted bit default b'0',
    primary key (id)
) engine = InnoDB;
create table user
(
    id           bigint           not null auto_increment,
    is_deleted   bit default b'0',
    email        varchar(65) not null,
    is_blocked   bit default b'0' not null,
    is_monitored bit default b'1' not null,
    password     varchar(65)     not null,
    username     varchar(128)    not null,
    user_card_id bigint,
    primary key (id)
) engine = InnoDB;
create table user_role
(
    user_id bigint not null,
    roles   integer
) engine = InnoDB;
create table user_card
(
    id         bigint not null auto_increment,
    is_deleted bit default b'0',
    birthday   datetime(6),
    gender     integer,
    mobile     varchar(15),
    name       varchar(255),
    surname    varchar(255),
    third_name varchar(255),
    user_id    bigint,
    primary key (id)
) engine = InnoDB;
alter table user
    add constraint UK_user_email unique (email);
alter table user
    add constraint UK_user_username unique (username);
alter table biochemical_blood_test
    add constraint FK_bio_test_user_doctor foreign key (attending_doctor_id) references user (id);
alter table biochemical_blood_test
    add constraint FK_bio_test_user foreign key (user_id) references user (id);
alter table general_blood_test
    add constraint FK_general_test_user_doctor foreign key (attending_doctor_id) references user (id);
alter table general_blood_test
    add constraint FK_general_test_user foreign key (user_id) references user (id);
alter table log_info
    add constraint FK_log_user foreign key (user_id) references user (id);
alter table user
    add constraint FK_user_user_card foreign key (user_card_id) references user_card (id);
alter table user_role
    add constraint FK_user_role_user foreign key (user_id) references user (id);
alter table user_card
    add constraint FK_user_card_user foreign key (user_id) references user (id);