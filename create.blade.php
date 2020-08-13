<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">

    <link rel="stylesheet" href="{{ asset('css/app.css')}}">
    <title>Document</title>
</head>
<body>
    <div id="app">
        <form method="POST" @submit.prevent="onSubmit" @keydown="form.errors.clear($event.target.name)">
            <div class="form-group">
                <label for="name" class="form-label">Name</label>
                <input type="text" id="name" name="name" class="form-control" v-model="form.name">
                <span class="small-text text-danger is-danger" v-if="form.errors.has('name')" v-text="form.errors.get('name')"></span>
            </div>
    
            <div class="form-group">
                <label for="description" class="form-label">Description</label>
                <input type="text" id="description" name="description" class="form-control" v-model='form.description'>
                <span class="small-text text-danger is-danger" v-if="form.errors.has('description')" v-text="form.errors.get('description')"></span>
            </div>
    
            <button type="submit" class="btn btn-success" :disabled="form.errors.any()">Save</button>
        </form>
    </div>
</body>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<script src="{{ asset('js/project.js') }}"></script>

</html>