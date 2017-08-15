from os import mkdir
from os.path import exists, dirname, join
import jinja2
from entity_test import get_entity_mm

def functionEntityHtml(this_folder, debug):


    entity_mm = get_entity_mm(debug)

    # Build Person model from person.ent file
    person_model = entity_mm.model_from_file(join(this_folder, 'person.ent'))


    # Create output folder
    srcgen_folder = join(this_folder, 'front-gen/app/scripts/entity/')
    if not exists(srcgen_folder):
        mkdir(srcgen_folder)

    # Initialize template engine.
    jinja_env = jinja2.Environment(
        loader=jinja2.FileSystemLoader(this_folder),
        trim_blocks=True,
        lstrip_blocks=True)

    # Register filter for mapping Entity type names to Java type names.


    # Load Java template
    template = jinja_env.get_template('frontend/entities/template/entity.html.template')

    for entity in person_model.entities:
        #For each entity generate java file
        strName = srcgen_folder + str(entity.name.lower())
        if not exists(strName):
            mkdir(strName)
        with open(join(strName, "all%s.html" % entity.name), 'w') as f:
            f.write(template.render(entity=entity))
