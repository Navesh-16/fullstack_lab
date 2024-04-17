# Generated by Django 4.1.5 on 2024-04-14 16:27

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Contest',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('contest_id', models.IntegerField(unique=True)),
                ('contest_name', models.CharField(max_length=50)),
                ('contest_logo', models.URLField()),
                ('contest_party', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='poll',
            fields=[
                ('voter_id', models.IntegerField(primary_key=True, serialize=False, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='voter',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('voter_id', models.IntegerField(unique=True)),
                ('voter_name', models.TextField(max_length=15)),
            ],
        ),
        migrations.CreateModel(
            name='Count',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('count_vote', models.IntegerField(default=0)),
                ('contest_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.contest')),
            ],
        ),
    ]
