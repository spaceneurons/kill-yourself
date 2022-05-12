create table email_validation_code
(
    id              bigint not null auto_increment,
    is_deleted      bit default b'0',
    create_date     datetime(6),
    validation_code varchar(255),
    user_id         bigint,
    primary key (id)
) engine = InnoDB;

alter table email_validation_code add constraint FK_code_user foreign key (user_id) references user (id);